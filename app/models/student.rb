class Student < ActiveRecord::Base
  attr_accessible :email, :github, :name, :website, 
  :photo_link, :project1_photo, :project_photo_url, 
  :left_percent, :top_percent
end
