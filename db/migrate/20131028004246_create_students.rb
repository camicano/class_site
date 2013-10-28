class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :name
      t.text :bio
      t.string :email
      t.string :github
      t.string :website
      t.string :twitter
      t.string :project_url
      t.string :project_url2
      t.string :project_url3
      t.string :other

      t.timestamps
    end
  end
end
