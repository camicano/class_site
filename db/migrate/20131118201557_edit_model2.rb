class EditModel2 < ActiveRecord::Migration
  def change
  	rename_column :students, :image_percent, :left_percent
  	add_column :students, :top_percent, :string
  end
end
