class CreateCseClasses < ActiveRecord::Migration
  def change
    create_table :cse_classes do |t|
      t.string :name
      t.string :info

      t.timestamps null: false
    end
  end
end
