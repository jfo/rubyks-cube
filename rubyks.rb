require 'sinatra'
require 'rubyks'

require_relative 'helpers/cubehelpers.rb'

#before do
#  if @cube == nil
#    @cube = Cube.new
#    @cube.cube = state_to_array(params[:state])
#  end
#end
#
get("/") do
  if @cube == nil
    @cube = Cube.new
    @cube.cube = state_to_array(params[:state])
  end

  erb :index
end

get("/scramble") do
  @cube.scramble
  redirect "/  "
end

post("/u") do
  @cube.u
  redirect "/"
end
