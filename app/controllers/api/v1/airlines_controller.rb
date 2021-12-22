module Api
    module V1
        class AirlinesController < ApplicationController
            # protect_from_forgery with: :null_session
            skip_before_action :verify_authenticity_token
            

            def index
                airlines = Airline.all

                render json: AirlineSerializer.new(airlines, options).serialized_json
            end
            
            def show
                airline = Airline.find_by(slug: params[:slug])

                render json: AirlineSerializer.new(airline, options).serialized_json
            end

            def create
                airline = Airline.new(airline_params)

                if airline.save
                    render json: AirlineSerializer.new(airline).serialized_json
                else
                    render json: {error: airline.errors.messages}, status: 422
                end
            end

            def update
                puts params

                airline = Airline.find_by(slug: params[:slug])

                if airline.update(airline_params)
                    render json: AirlineSerializer.new(airline).serialized_json
                else
                    render json: {error: airline.errors.messages}, status: 422
                end
            end

            def destroy
                if airline.destroy
                    head :no_content
                else
                    render json: errors(airline), status: 422
                end
            end

            private

            def airline_params
                params.require(:airline).permit(:name, :img_url)
            end

            def airline
                @airline ||= Airline.includes(:reviews).find_by(slug: params[:slug])
            end
        

            def options
                @options ||= { include: %i[reviews] }
            end
        end
    end
end