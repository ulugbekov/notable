module Api
  module V1
    class AppointmentSerializer < ApplicationSerializer
      attributes :id, :patient, :time, :kind

      def kind
        I18n.t(object.kind, scope: :appointments)
      end

      def time
        object.time.strftime('%I:%M%p')
      end
    end
  end
end
