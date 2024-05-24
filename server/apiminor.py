from flask import Flask, jsonify, request
import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn import preprocessing
from flask_cors import CORS

api = Flask(__name__)
CORS(api)

@api.route('/sleep', methods=['POST'])
def sleep():
    data = request.get_json()
    label_encoder = preprocessing.LabelEncoder()

    # Extracting data from the request
    Occupation = data['Occupation']
    BMICatagory = data['BMICatagory']
    gender = data['gender']
    Age = data['Age']
    Sleep_Duration = data['SleepDuration']
    Ouality_of_Sleep = data['QualityOfSleep']
    Physical_Activity_Level = data['PhysicalActivity']
    Stress_Level = data['StressLevel']
    Heart_Rate = data['HeartRate']
    Daily_Steps = data['DailySteps']
    Systolic = data['Systolic']
    Diastolic = data['Diastolic']

    # Manually encoding occupation
    occupation_mapping = {
        "SOFTWARE ENGINEER": 9,
        "DOCTOR": 1,
        "SALES REPRESENTATIVE": 6,
        "TEACHER": 10,
        "NURSE": 5,
        "ENGINEER": 2,
        "ACCOUNTANT": 0,
        "SCIENTIST": 8,
        "LAWYER": 3,
        "SALES PERSON": 7,
        "MANAGER": 4
    }
    Occupation = occupation_mapping.get(Occupation.upper(), 4)

    # Manually encoding BMI category
    bmi_mapping = {
        "OVER WEIGHT": 3,
        "NORMAL": 0,
        "OBESE": 2,
        "NORMAL WEIGHT": 1
    }
    BMICatagory = bmi_mapping.get(BMICatagory.upper(), 0)

    # Load dataset and train model
    df = pd.read_csv('D:/my projects/Machine Learning/Sleep_health_and_lifestyle_dataset.csv')
    
    # Encode categorical features in the dataset
    df['Occupation'] = label_encoder.fit_transform(df['Occupation'])
    df['BMI Category'] = label_encoder.fit_transform(df['BMI Category'])
    
    X = df.drop(columns=['Sleep Disorder', 'Person ID'])
    y = df['Sleep Disorder']
    
    model = DecisionTreeClassifier()
    model.fit(X, y)
    
    # Predict the sleep disorder based on input data
    predicted_value = model.predict([[gender, Age, Occupation, Sleep_Duration, Ouality_of_Sleep, Physical_Activity_Level, Stress_Level, BMICatagory, Heart_Rate, Daily_Steps, Systolic, Diastolic]])

    return jsonify({
        'result': predicted_value.tolist()
    })

if __name__ == '__main__':
    api.run(debug=True)
