class EditModel < ActiveRecord::Migration
  def change
  	remove_column :students, :bio
  	remove_column :students, :twitter
  	remove_column :students, :project_url
  	remove_column :students, :project_url2
  	remove_column :students, :project_url3
  	remove_column :students, :project2_photo
  	remove_column :students, :project3_photo
  	remove_column :students, :other
  	remove_column :students, :project1_photo

	add_column :students, :project_photo_url, :string  	
  end
end
