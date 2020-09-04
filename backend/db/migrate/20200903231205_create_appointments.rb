class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.string :patient, null: false
      t.integer :kind, null: false
      t.datetime :time, null: false

      t.references :physician

      t.timestamps
    end
  end
end
