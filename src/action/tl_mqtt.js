export function tl_Subscribe_Handle(t_topic, cb) {

  const morkData = {
    uSessionID: '213',
    uIMEI: 'r4r4r',
    uDateTime64_UTC: '2017-06-12',
    TMD_GS_RunStatusDefault: [{
      uMID: '1111',
      uDateTime64_UTC: '34534543',
      strMoldName: '机械手',
      nPopCount: 61,
      nProductCount: 45,
      nSuccessRate: 87,
      nFailedRate: 13,
      uEstimateFinishDateTime64_UTC: '2017-06-30',
      nOneTimeProductCount: 85,
      nFetchCount: 21,
      fAxisPos: [{
        fAxis: 1
      }, {
        fAxis: 3
      }, {
        fAxis: 2
      }, {
        fAxis: 4
      }],
      arrForceInSignal: [{
        nSignal: 20
      }, {
        nSignal: 13
      }, {
        nSignal: 16
      }, {
        nSignal: 11
      }],
      arrForceOutSignal: [{
        nSignal: 7
      }, {
        nSignal: 15
      }, {
        nSignal: 18
      }, {
        nSignal: 3
      }]
    }]
  }

  const tempData = {
    tempretrue: 324.2,
    tempretrue1: 73,
    tempretrue2: 98,
    tempretrue3: 62,
    tempretrue4: 37
  }

  const mqtt = require('mqtt')
  const client = mqtt.connect('mqtt://47.89.41.117:9011')
  client.on('connect', function() {
    client.subscribe(t_topic)
    client.publish(t_topic, JSON.stringify(tempData))
  })

  client.on("message", function(topic, payload) {
    cb(JSON.parse(payload))
    client.end()
  })
}