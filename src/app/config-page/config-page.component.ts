import { Component } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.css']
})
export class ConfigPageComponent {
  config: any; // Declare a variable to store the configuration

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    // Fetch the configuration values from the service
    this.configService.loadConfig()
    this.config = this.configService.getConfig();
  }
}
