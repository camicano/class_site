class AddPhoto < ActiveRecord::Migration
  def change
  	add_column :students, :photo_link, :string
  end
end
