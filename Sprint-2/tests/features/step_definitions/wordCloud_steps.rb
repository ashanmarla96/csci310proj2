Then /I should see the status bar/ do
  expect(page).to have_content("status bar")
end

#Then / I should get a download with the filename "[^\"]*"$/ do |filename|
  #page.driver.response.headers['Content-Disposition'].should include("filename=\"#{filename}\"")
#end
