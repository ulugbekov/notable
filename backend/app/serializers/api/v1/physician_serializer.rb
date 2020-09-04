module Api
  module V1
    class PhysicianSerializer < ApplicationSerializer
      attributes :id, :email, :first_name, :last_name
    end
  end
end
