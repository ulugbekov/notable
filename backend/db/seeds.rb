p1 = Physician.create!(first_name: 'Julius', last_name: 'Hibbert', email: 'hibbert@notablehealth.com')
p2 = Physician.create!(first_name: 'Algermop', last_name: 'Krieger', email: 'krieger@notablehealth.com')
p3 = Physician.create!(first_name: 'Nick', last_name: 'Riviera', email: 'riviera@notablehealth.com')

physicians = [p1, p2, p3]

new_patients = [
  'Sterling Archer',
  'Lana Kane',
  'Pam Poovey'
]

follow_up_patients = [
  'Cyril Figis',
  'Ray Gilette'
]

new_patients.each do |patient|
  physicians.each do |physician|
    physician.appointments.create!(
      patient: patient,
      time: Time.zone.now + [*0..23].sample.hours,
      kind: :new_patient
    )
  end
end

follow_up_patients.each do |patient|
  physicians.each do |physician|
    physician.appointments.create!(
      patient: patient,
      time: Time.zone.now + [*0..23].sample.hours,
      kind: :follow_up
    )
  end
end
