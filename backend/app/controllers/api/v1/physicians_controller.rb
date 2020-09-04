module Api
  module V1
    class PhysiciansController < ActionController::API
      def index
        render json: physicians
      end

      private

      def physicians
        @physicians ||= Physician.all
      end
    end
  end
end
