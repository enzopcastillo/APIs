import { Component, OnInit } from '@angular/core';
import { TextToSpeechService } from 'src/app/services/text-to-speech.service';

@Component({
  selector: 'app-text-to-speech',
  templateUrl: './text-to-speech.component.html',
  styleUrls: ['./text-to-speech.component.css']
})
export class TextToSpeechComponent implements OnInit {
  text!: string;
  voiceCode: string = 'en-US-1';
  resultado!: string;

  constructor(private speechService: TextToSpeechService) {}

  speech(){
    console.log(this.voiceCode);
    console.log(this.text);
    this.speechService.getSpeech(this.voiceCode, this.text).subscribe(
      (result)=>{
        this.resultado = result.result['audio_url'];
      },
      (error)=>{
        alert('Error en la peticion.');
      }
    )
  }

  ngOnInit(): void {}
}
