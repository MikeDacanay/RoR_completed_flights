class AirlineSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :img_url, :slug, :avg_score

  has_many :reviews
end
