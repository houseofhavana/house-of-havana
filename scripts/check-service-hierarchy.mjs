import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
const source = fs.readFileSync('data/services.ts', 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
const exported = {};
new Function('exports', compiled)(exported);
const { servicesList, getServicesWithPages, getChildServices, getServiceBySlug, getRelatedServices, serviceRedirects } = exported;
assert.deepEqual(servicesList.map(x => x.title), ["Men's Haircuts", 'Fade Haircuts', 'Beard Grooming', 'Hot Shaves', 'Partial Perms', 'Full Perms', 'Color Camouflage', 'Nose Wax']);
assert.equal(getChildServices('mens-haircut-saskatoon').length, 11);
assert.equal(getChildServices('fade-haircut-saskatoon').length, 6);
assert.equal(getChildServices('beard-grooming-saskatoon').length, 4);
const pages = getServicesWithPages();
assert.equal(pages.length, 30); // 8 main + 21 child + established treatments overview
for (const key of ['slug', 'h1']) assert.equal(new Set(pages.map(x => x.page[key])).size, pages.length);
assert.equal(new Set(pages.map(x => x.page.meta.description)).size, pages.length);
for (const service of pages) {
  assert(service.page.faqs.length > 0);
  assert(service.page.sectionItems.length >= 4);
  if (service.parentSlug) {
    assert(service.page.slug.startsWith(service.parentSlug + '/'));
    assert(getServiceBySlug(service.parentSlug));
    assert.equal(getRelatedServices(service.page.slug)[0], getServiceBySlug(service.parentSlug));
  }
  for (const related of getRelatedServices(service.page.slug)) assert(getServiceBySlug(related.page.slug));
}
for (const [previous, current] of Object.entries(serviceRedirects)) {
  assert.equal(getServiceBySlug(previous), getServiceBySlug(current));
  assert(!pages.some(x => x.page.slug === previous));
}
assert.equal(getServiceBySlug('nonexistent'), undefined);
assert.equal(getServiceBySlug('mens-haircut-saskatoon/not-a-style'), undefined);
assert.equal(getServiceBySlug('nose-wax-saskatoon').items.length, 0);
assert.equal(servicesList[0].items[0].price, '$38–$50');
assert.equal(servicesList[0].items[1].price, '$50–$80');
console.log('Service hierarchy: 8 main pages, 21 child pages, preserved overview, aliases and pricing pass.');
