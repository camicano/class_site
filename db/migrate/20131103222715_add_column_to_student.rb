class AddColumnToStudent < ActiveRecord::Migration
  def change
  	add_column :students, :project1_photo, :string
  	add_column :students, :project2_photo, :string
  	add_column :students, :project3_photo, :string
  end
end
