export interface BirdRecording {
    id: string;
    gen: string;
    sp: string;
    ssp: string;
    group: string;
    en: string;
    rec: string;
    cnt: string;
    loc: string;
    lat: string;
    lng: string;
    alt: string;
    type: string;
    sex: string;
    stage: string;
    method: string;
    url: string;
    file: string;
    file_name: string;
    sono: {
      small: string;
      med: string;
      large: string;
      full: string;
    };
    osci: {
      small: string;
      med: string;
      large: string;
    };
    lic: string;
    q: string;
    length: string;
    time: string;
    date: string;
    uploaded: string;
    also: string[];
    rmk: string;
    bird_seen: string;
    animal_seen: string;
    playback_used: string;
    temp: string;
    regnr: string;
    auto: string;
    dvc: string;
    mic: string;
    smp: string;
  }
  