import { Component, OnInit } from '@angular/core';
import { NbaService } from 'src/app/services/nba.service';
import { Team } from 'src/app/models/team';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NbaComponent implements OnInit {
  teams!: Array<Team>;
  team!: Team;
  players!: Array<Player>;
  player!: Player;

  constructor(private nbaService: NbaService) {
    this.cargarTeams();
    this.cargarPlayers();
  }

  cargarTeams(){
    this.nbaService.getTeams().subscribe(
      (result)=>{
        this.teams = new Array<Team>();
        result['data'].forEach(element =>{
          this.team = new Team();
          Object.assign(this.team, element);
          this.teams.push(this.team);
        });
      },
      (error)=>{
        alert('Error en la peticion.');
      }
    )
  }

  cargarPlayers(){
    this.nbaService.getPlayers().subscribe(
      (result)=>{
        this.players = new Array<Player>();
        result['data'].forEach(element =>{
          this.player = new Player();
          Object.assign(this.player, element);
          this.players.push(this.player);
        });
      },
      (error)=>{
        alert('Error en la peticion.');
      }
    )
  }

  ngOnInit(): void {}
}
