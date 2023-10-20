from ..api.wmata_api import WmataAPI
wmata_api = WmataAPI()

class StationArrivalInfo:
    def __init__(self, data):
        self.station = data['station']
        self.arrival_info = self.get_arrival_info_by_station()

    def get_arrival_info_by_station(cls):
        arrival_info = wmata_api.get_arrival_info_by_station(cls.station)
        arrival_info = cls.extract_relevant_arrival_data(arrival_info["Trains"])
        return arrival_info

    @staticmethod
    def extract_relevant_arrival_data(data):
        relevant_data = [{'cars': item['Car'], 'destinationName': item['DestinationName'], 'line': item['Line'], 'mins': item['Min']} for item in data]
        return relevant_data