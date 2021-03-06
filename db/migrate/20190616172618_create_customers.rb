class CreateCustomers < ActiveRecord::Migration[5.2]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :email
      t.boolean :rewards_member
      t.belongs_to :library, foreign_key: true

      t.timestamps
    end
  end
end
