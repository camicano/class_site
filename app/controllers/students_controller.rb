class StudentsController < ApplicationController
  def index
  	@students = Student.all

  	respond_to do |format|
  		format.html
  		format.json { render :json => @students.to_json }
  	end
  end

  def show
  	@student = Student.find_by_name(params[:slug])

  	respond_to do |format|
  		format.json { render :json => @student.to_json }
  	end
  end
end
