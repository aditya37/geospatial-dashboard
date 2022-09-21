const DetectedDeviceCol = [
    {
        name: "Device Id",
        selector: (row) => row.device_id,
      },
      {
        name: "Status",
        selector: (row) => row.status,
      },
      {
        name: "Detect",
        selector: (row) => row.detect,
      },
      {
        name: "Geofence Area",
        selector: (row) => row.geofence_area,
      },
]
export default DetectedDeviceCol