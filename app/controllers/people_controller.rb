class PeopleController < ApplicationController
  PersonSerializer = Struct.new(:firstName, :lastName, :age)

  def index
    respond_to do |format|
      format.html
      format.json {
        render json: {
          people: people
        }
      }
    end
  end

  private

  def people
    [
        PersonSerializer.new('Lisa', 'Simpson', 8),
        PersonSerializer.new('Bart', 'Simpson', 10),
    ]
  end
end