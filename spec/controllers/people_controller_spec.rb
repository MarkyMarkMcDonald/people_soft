require 'rails_helper'

describe PeopleController do
  describe '#index' do
    it 'follows the json schema for a person' do
      get :index, format: :json

      expect(response).to match_json_schema('people')
    end
  end
end