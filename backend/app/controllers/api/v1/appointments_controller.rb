module Api
  module V1
    class AppointmentsController < ActionController::API
      delegate :appointments, to: :physician

      def index
        render json: todays_appointments
      end

      private

      def physician
        @physician ||= Physician.find(params[:physician_id])
      end

      def todays_appointments
        appointments.today
      end
    end
  end
end
