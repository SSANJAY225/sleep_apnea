import pandas as pd
import numpy as np
from sklearn.tree import DecisionTreeClassifier
from sklearn.tree import export_graphviz
from sklearn import preprocessing
import flask

df = pd.read_csv('D:/my projects/Machine Learning/Sleep_health_and_lifestyle_dataset.csv')
# Occupation = LabelEncoder()
label_encoder = preprocessing.LabelEncoder()
df['Occupation']= label_encoder.fit_transform(df['Occupation'])
df['BMI Category']= label_encoder.fit_transform(df['BMI Category'])

#X_cols = df.columns.to_list()[1:12]
X = df.drop(columns=['Sleep Disorder','Person ID'])
y = df['Sleep Disorder']

model = DecisionTreeClassifier()#(criterion='entropy',max_depth=2)
model.fit(X,y)
model.score(X,y)

gender=0 #male
Age=25
Occupation=6
Sleep_Duration=6.1
Ouality_of_Sleep=6
Physical_Activity_Level=42
Stress_Level=6
BMI_Category=0
Heart_Rate=77
Daily_Steps=10000
Systolic=120
Diastolic=80
print(model.predict([[gender,Age,Occupation,Sleep_Duration,Ouality_of_Sleep,Physical_Activity_Level,Stress_Level,BMI_Category,Heart_Rate,Daily_Steps,Systolic,Diastolic]]))
