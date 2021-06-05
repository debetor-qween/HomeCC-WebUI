import axios from 'axios'

// const TKEY = "Bearer oh.Heating.5auG5DR8Wikf3u3HVTdsSKKbGm4z5017YNT4D98TZqcAKglEjm2MWWyNXDAlUtAsnbXT02rdfHFTi4Up5xw";
const TKEY = "Bearer oh.devHeatingApp.NgzNpiLNY1yNuMLqMIiucoebY46vojwY7BHlrkl9pG0ERFhZF10stCiGJPlljuFnwYp4juuWaTYWmQrKjw";

export default class BindService {
    
    getBindings() {
        const URI = "http://localhost:88/rest/bindings";
        return axios.get(URI, {headers: {"Authorization": TKEY}})
            .then(res => res.data);
    }

}