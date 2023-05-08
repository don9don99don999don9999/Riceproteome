from django.contrib import admin
from .models import UploadFileModel,FileinfoModel,ProjectinfoModel,ImgfieldModel,Protein_calcul,AnalysisinfoModel,TaskidandID,Analysisidstatus
from django.db import models
from markdownx.admin import MarkdownxModelAdmin



class UploadFileModelAdmin(MarkdownxModelAdmin):
    list_display = (
        'description',
        'filename',
        'files',
        'upload_at',
      'username',
      'projecttitle','destxt'
        
       # 'compare',
    )

class FileinfoModelAdmin(MarkdownxModelAdmin):
    list_display = (
        'proj',
        'compare',
      'username',
      'whole',
      'projecttitle','destxt'
        
    )
    
class ProjectinfoModelAdmin(MarkdownxModelAdmin):
  list_display=(
    'projectname','startdate','enddate','description','username'
  )

class ImgfieldModelAdmin(MarkdownxModelAdmin):

  list_display=(
    'description','imagefiles','username','projecttitle','attr'
  )



class Protein_calculAdmin(MarkdownxModelAdmin):

  list_display=(
    'projidtitle','indexinfo'
  )



class AnalysisinfoModelAdmin(MarkdownxModelAdmin):

  list_display=(
   'Analysisinfo',   'proj' ,  'compare' ,  'username' ,   'whole' , 'projecttitle',   'LabelMethod',    'FilterMethod',
'AnalysisinfoTXT', 'indexinfo' , 'taskId' , 'taskIdfin' , 'taskId2', 'taskId3',  'pvfc' , 'proteincount' 
  )



class TaskidandIDModelAdmin(MarkdownxModelAdmin):

  list_display=(
   'Taskid' ,'Analysisid'
  )

class AnalysisidstatusModelAdmin(MarkdownxModelAdmin):

  list_display=(
   'Analysisid','RelatedModels','finishmode'
  )
#Analysisidstatus
#TaskidandID
admin.site.register(FileinfoModel, FileinfoModelAdmin)    

admin.site.register(UploadFileModel, UploadFileModelAdmin)

admin.site.register(ProjectinfoModel, ProjectinfoModelAdmin)

admin.site.register(ImgfieldModel, ImgfieldModelAdmin)  

admin.site.register(AnalysisinfoModel, AnalysisinfoModelAdmin) 
admin.site.register(Analysisidstatus, AnalysisidstatusModelAdmin) 
admin.site.register(TaskidandID, TaskidandIDModelAdmin)  