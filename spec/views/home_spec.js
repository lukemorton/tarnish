feature('Home page',
  scenario('Viewing post summaries',
           when_i_visit_the_homepage
           then_i_should_see_post_summaries));

let homepage;

function when_i_visit_the_homepage() {
  homepage = page('home#Index', { postSummaries: factory.createList('postSummary', 3) });
}

function then_i_should_see_post_summaries() {
  expect(homepage.find('post')).to.have.length(3);
}
