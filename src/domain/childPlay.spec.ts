describe('Child Play resolution', () => {
  it('should return 7 and 1 coordinate of robot when proceed', () => {
    const width = 12;
    const height = 6;
    const n = 987;
    const mapChild: string[][] = new Array(height)
      .fill('.')
      .map(() => new Array(width)
        .fill('.'));
    mapChild[0][3] = '#';
    mapChild[1][11] = '#';
    mapChild[4][2] = '#';
    mapChild[4][3] = 'O';
    mapChild[5][10] = '#';
    let posix = 0;
    let posy = 0;
    mapChild.map((line, index) => line.map((column, index2) => {
        if (mapChild[index][index2] === 'O') {
          posy = index;
          posix = index2;
        }
      }
    ));
    const posxdeb = posix;
    const posydeb = posy;
    let direction = 0;
    for (let j = 0;
         j < n;
         j++
    ) {
      if (direction % 4 === 0) {
        posy--;
      }
      if (direction % 4 === 1) {
        posix++;
      }
      if (direction % 4 === 2) {
        posy++;
      }
      if (direction % 4 === 3) {
        posix--;
      }
      if (posxdeb === posix && posydeb === posy) {
        j = n - n % (j + 1);
        j--;
      }

      while (mapChild[posy][posix] === '#') {
        if (direction % 4 === 0) {
          posy++;
          posix++;
        }
        if (direction % 4 === 1) {
          posix--;
          posy++;
        }
        if (direction % 4 === 2) {
          posy--;
          posix--;
        }
        if (direction % 4 === 3) {
          posix++;
          posy--;
        }

        direction++;
      }


    }

    expect(posix.toString() + ' ' + posy.toString()).toEqual('7 1');
  });
  it('should return 6 and 6 coordinate of robot when proceed long n', () => {
    const width = 16;
    const height = 10;
    const n = 12321123212397;
    const mapChild: string[][] = new Array(height)
      .fill('.')
      .map(() => new Array(width)
        .fill('.'));
    mapChild[0][3] = '#';
    mapChild[0][7] = '#';
    mapChild[0][8] = '#';
    mapChild[0][9] = '#';
    mapChild[1][15] = '#';
    mapChild[2][1] = '#';
    mapChild[3][11] = '#';
    mapChild[6][2] = '#';
    mapChild[6][3] = 'O';
    mapChild[7][7] = '#';
    mapChild[7][8] = '#';
    mapChild[7][9] = '#';
    mapChild[7][10] = '#';
    mapChild[8][0] = '#';
    mapChild[9].fill('#');
    mapChild[9][15] = '.';

    let posix = 0;
    let posy = 0;
    mapChild.map((line, index) => line.map((column, index2) => {
        if (mapChild[index][index2] === 'O') {
          posy = index;
          posix = index2;
        }
      }
    ));
    const posxdeb = posix;
    const posydeb = posy;
    let direction = 0;
    for (let j = 0;
         j < n;
         j++
    ) {
      switch (direction % 4) {
        case 0:
          posy--;
          break;
        case 1:
          posix++;
          break;
        case 2:
          posy++;
          break;
        case 3:
          posix--;
          break;
      }

      if (posxdeb === posix && posydeb === posy) {
        j = n - n % (j + 1);
        j--;
      }

      while (mapChild[posy][posix] === '#') {
        switch (direction % 4) {
          case 0:
            posy++;
            posix++;
            break;
          case 1:
            posix--;
            posy++;
            break;
          case 2:
            posy--;
            posix--;
            break;
          case 3:
            posix++;
            posy--;
            break;
        }
        direction++;
      }


    }

    expect(posix.toString() + ' ' + posy.toString()).toEqual('6 6');
  });
  it('should return 1 and 3 coordinate of robot when proceed loop', () => {
    const width = 5;
    const height = 5;
    const n = 4;
    const mapChild: string[][] = new Array(height)
      .fill('.')
      .map(() => new Array(width)
        .fill('.'));

    mapChild[1][0] = '#';
    mapChild[1][4] = '#';
    mapChild[2][0] = '#';
    mapChild[2][2] = '#';
    mapChild[2][4] = '#';
    mapChild[3][0] = '#';
    mapChild[3][4] = '#';

    mapChild[0].fill('#');
    mapChild[4].fill('#');
    mapChild[4][2] = 'O';


    let posix = 0;
    let posy = 0;
    mapChild.map((line, index) => line.map((column, index2) => {
        if (mapChild[index][index2] === 'O') {
          posy = index;
          posix = index2;
        }
      }
    ));
    const posxdeb = posix;
    const posydeb = posy;
    let direction = 0;
    for (let j = 0;
         j < n;
         j++
    ) {
      switch (direction % 4) {
        case 0:
          posy--;
          break;
        case 1:
          posix++;
          break;
        case 2:
          posy++;
          break;
        case 3:
          posix--;
          break;
      }

      if (posxdeb === posix && posydeb === posy) {
        j = n - n % (j + 1);
        j--;
      }

      while (mapChild[posy][posix] === '#') {
        switch (direction % 4) {
          case 0:
            posy++;
            posix++;
            break;
          case 1:
            posix--;
            posy++;
            break;
          case 2:
            posy--;
            posix--;
            break;
          case 3:
            posix++;
            posy--;
            break;
        }
        direction++;
      }


    }

    expect(posix.toString() + ' ' + posy.toString()).toEqual('1 3');
  });
});
