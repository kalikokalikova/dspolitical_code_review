from flask_server import app
from flask_server.models.station_arrival_info import StationArrivalInfo
from ..wmata_api import WmataAPI
from flask_caching import Cache

wmata_api = WmataAPI()
app.config['CACHE_TYPE'] = 'simple'
cache = Cache(app)

@app.route("/trains/stations")
# simple cache set to expire in 1 day
@cache.cached(timeout=86400)
def get_train_stations():
    stations = wmata_api.get_stations()
    result = [{'label': station["Name"], 'value': station["Code"]} for station in stations]
    return result

@app.route("/trains/get-arrival-info/<station>")
def get_arrival_info_by_station(station):
    station_arrival_info_instance = StationArrivalInfo({'station': station})
    return station_arrival_info_instance.get_arrival_info_by_station()
