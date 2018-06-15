import { Component, Input } from '@angular/core';

import { Round } from '../../worldcup';

@Component({
  selector: 'bbv-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.scss']
})
export class RoundComponent {
  @Input() round: Round;
}
