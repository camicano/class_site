class Student < ActiveRecord::Base
  attr_accessible :bio, :email, :github, :name, 
  :other, :project_url, :project_url2, :project_url3, 
  :twitter, :website
end
