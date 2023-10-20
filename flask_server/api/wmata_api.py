import requests

# In real life this would be stored in a config file or some other location
API_KEY = "e13626d03d8e4c03ac07f95541b3091b"

class WmataAPI:

    def __init__(self):
        self.base_url = "https://api.wmata.com"

    def get_stations(self):
        headers = {'api_key':f'{API_KEY}'}
        url = f"{self.base_url}/Rail.svc/json/jStations"
        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            return response.json()["Stations"]
        else:
            return {"error": "Failed to retrieve train information"}

    def get_arrival_info_by_station(self, station, params=None):
        url = f"{self.base_url}/StationPrediction.svc/json/GetPrediction/{station}"
        headers = {'api_key': f'{API_KEY}'}
        response = requests.get(url, params=params, headers=headers)

        if response.status_code == 200:
            return response.json()
        else:
            # Handle errors, log, and return an appropriate response
            return {"error": "Failed to retrieve train information"}
