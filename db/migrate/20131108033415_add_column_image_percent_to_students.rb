class AddColumnImagePercentToStudents < ActiveRecord::Migration
  def change
    add_column :students, :image_percent, :integer
  end
end
