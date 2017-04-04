Then /the chosen word should be shown on the page/ do
	expect(page).to have_content("word")
end

Then /the entries on the list should have name, parenthesis and frequency/ do
	expect(page).to have_content("(")
	expect(page).to have_content(")")
	expect(page).to have_content("1")
	expect(page).to have_content("Boyfriend")
end

When /I select radio buttons/ do
	page.choose('radio button')
end

When /I click a paper title / do
	page.click_link("paper title")
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
