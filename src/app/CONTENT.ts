import { Content } from './models/content.model';

export const CONTENTS: Content[] = [
  new Content('board', 'Who is on the Board?', 'June 2018', 'The Board consists of three elected directors. Officer positions are chosen by the Board Members. VACANT (contact the Board of Directors if you are interested in serving in this position)	board@westoakscondos.org Chip Clough (through 2018) board@westoakscondos.org Daniel Hough, President/Treasurer (through 2019)	daniel@westoakscondos.org Mitch Mannino (through 2018)	mitch@westoakscondos.org You also can e-mail the entire Board.'),
  new Content('board', 'How do I contact the Board?', 'June 2018', 'ou can e-mail the Board using the addresses above. You can always find the Board at the regular meetings, too; you always are invited!')
]


// class Content { constructor(public type: string, public title: string, public date: string, public content: string) { } }

// Content "types" are 'board', 'management', 'meeting', 'homepage', 'encyclopedia'
