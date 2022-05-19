const songs = [
  {
    id: 1,
    title: 'Vợ Người Ta',
    artist: 'Phan Mạnh Quỳnh',
    artwork: {uri:'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fvonguoita.jpg?alt=media&token=5c5f5d58-bb8a-426a-bfdb-3ef185708f8b'},
    url:'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2FVoNguoiTa.mp3?alt=media&token=f1e5a704-9af1-415d-9daf-2ec00ff53729',
  },
  {
    id: 2,
    title: 'Buông Đôi Tay Nhau Ra',
    artist: 'MTP',
    artwork: {uri: 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fbuongdoitaynhaura.jpg?alt=media&token=408d7758-98ce-44a9-ba06-85168e810214'},
    url: 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2FBuongDoiTayNhauRa.mp3?alt=media&token=176b65b3-9b78-4d2d-93d3-a438838157aa',
  },
  {
    id: 3,
    title: 'Đám Cưới Nha',
    artist: 'Hồng Thanh',
    artwork: {uri: 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fdamcuoinha.jpg?alt=media&token=f77bc97a-9161-45b3-b461-468edcaaf4fb'},
    url: 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2Fdamcuoinha.mp3?alt=media&token=f179a4d6-a4e4-44b0-8f28-26bbb3236cc3',
  },
  {
    id: 4,
    title: 'So Far Away',
    artist: 'MartinGarrix',
    artwork: {uri: 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2FSoFarAway.png?alt=media&token=76d1078b-02b3-4c66-9ecb-fe9fbbc14ae1'},
    url: 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2FSoFarAway-MartinGarrixDavidGuettaJamieScottRomyDya-5298615.mp3?alt=media&token=c33dd135-b0e9-4961-a728-3ff3e8f1d3e4',
  },
  {
    id: 5,
    title: 'Chỉ Là Giấc Mơ',
    artist: 'Bùi Anh Tuấn',
    artwork: {uri: 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2FChiLaGiacMo.jpg?alt=media&token=c05b1cd9-4d43-47d8-ba55-55a70f592abc'},
    url: 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2FChiLaGiacMoNewVersion-BuiAnhTuan-3894643.mp3?alt=media&token=8153fb95-1c2c-48c0-8096-b9b9125b555c',
  },
  {
    id: 6,
    title: 'Nụ Hồng Mong Manh',
    artist: 'Bích Phương',
    artwork: {uri: 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fnuhongmongmanh.jpg?alt=media&token=1ef25309-2a2b-4efe-bec4-a40674ae8a3c'},
    url: 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2FN%E1%BB%A5%20H%E1%BB%93ng%20Mong%20Manh.mp3?alt=media&token=324cd97f-4dc0-49d7-87fd-f02bbb0b5d69',
  },
  {
    id: 7,
    title: 'Em Của Ngày Hôm Qua',
    artist: 'MTP',
    artwork: {uri: 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2FEm_c%E1%BB%A7a_ng%C3%A0y_h%C3%B4m_qua.png?alt=media&token=84ee4a3d-34c3-44bf-9a00-089ec3e87dc6'},
    url: 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2FEmCuaNgayHomQua.mp3?alt=media&token=6cb1c7bd-8434-4bc7-9988-7f3eca1e28f4',
  },
];

export default songs;
// const random = Math.floor(Math.random() * songs.length);
// const song = songs[random]
// console.log(random, song)