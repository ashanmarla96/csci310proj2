Then /the chosen word should be shown on the page/ do
	expect(page).to have_content("the")
end

When /I select radio buttons/ do
	page.choose('radio button')
end

When /I click a paper title / do
	page.click_link("I'm Walking")
end



When /I click a link/ do
	page.click_link("paper link")
end

Then /the content should match the paper I clicked/ do
	expect(page).to have_content("content of the abstract page")
end

Then /I should down load the PDF/ do
	 expect(page).to have_content("need to revise it")
end
