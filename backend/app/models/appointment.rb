class Appointment < ApplicationRecord
  enum kind: { new_patient: 0, follow_up: 1 }

  belongs_to :physician

  scope :today, -> {
    where(time: Time.zone.now.beginning_of_day..Time.zone.now.end_of_day).order(time: :asc)
  }
end
