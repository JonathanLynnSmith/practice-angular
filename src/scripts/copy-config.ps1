$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$ConfigDir = Join-Path $ScriptDir "..\config"
$DestinationPath = Join-Path $ScriptDir "..\assets\config.json"

if ($args.Count -eq 1) {
    $SelectedArg = $args[0]
    $SelectedConfig = "config.$SelectedArg.json"
    $SelectedConfigPath = Join-Path $ConfigDir $SelectedConfig

    if(Test-Path $DestinationPath) {
      Write-Host "Removing existing config.json file"
      Remove-Item $DestinationPath
    }

    try {
      if(Test-Path $SelectedConfigPath) {
        if(Test-Path $DestinationPath) {
          Write-Host "Removing existing config.json file"
          Remove-Item $DestinationPath
          }

        Copy-Item -Path (Join-Path $ConfigDir "config.$SelectedArg.json") -Destination $DestinationPath
        Write-Host "Copied config/$SelectedConfig to assets/config.json"
      }
      else {
        Write-Host "$SelectedConfigPath not found"
      }
    } catch {
        Write-Host "Error: $($_.Exception.Message)"
        exit 1
    }
}
else {
    Write-Host "Error: No argument provided"
    exit 1
}


