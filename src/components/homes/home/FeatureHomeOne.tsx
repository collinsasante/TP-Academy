 

type Props = {
  style_2?: boolean
}

export default function FeatureHomeOne({style_2}: Props) {

  
  return (
    <>
      <section className={`features section-padding ${style_2 ? 'fstyle-2' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 wow fadeInUp wow fadeIn">
              <div className="section-title text-center">
                <span>Features</span>
                <h2>One Platform Many Course</h2>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeIn">
              <div className="feature-item">
                <div className="fea-icon">
                  <svg fill="none" viewBox="0 0 37 37"><g clipPath="url(#clip0_2830_373)"><path fill="#0D5FF9" d="M17.488.05c-.997.102-2.312.492-3.252.962-.578.289-1.611.997-1.82 1.243a.538.538 0 00.014.708c.245.246.534.188 1.12-.246a8.573 8.573 0 013.721-1.532c.882-.13 1.496-.13 2.443.015 1.828.267 3.245.968 4.495 2.21.296.297.643.593.766.659.34.173.86.794 1.098 1.3.369.795.448 1.41.448 3.635V11l-.159-.044a3.678 3.678 0 00-.462-.094l-.303-.036-.03-.99c-.021-.607-.072-1.055-.13-1.178-.093-.202-.585-.491-.838-.491-.419 0-1.07-.484-1.575-1.178-.246-.332-.528-.484-.91-.484-.355 0-.456.05-1.12.55-1.75 1.3-3.845 1.85-6.201 1.625-.535-.05-1.12-.072-1.294-.043-.99.166-1.835.91-2.117 1.864-.08.275-.116.31-.369.347-.151.022-.39.065-.513.094l-.238.058v-1.04c0-2.09.303-3.419 1.091-4.77.159-.275.282-.578.282-.701 0-.463-.557-.687-.89-.354-.252.26-.88 1.539-1.126 2.312-.326 1.019-.441 2.096-.441 4.004 0 1.113-.03 1.676-.087 1.785-.043.086-.087.354-.087.592 0 1.048.802 1.908 1.908 2.038.383.043.39.058.47.564.072.462.39 1.394.629 1.871a7.333 7.333 0 002.442 2.768l.506.333v.91l-.665.463c-.643.448-.773.498-3.02 1.279-1.294.448-2.508.896-2.71 1.004-.542.29-1.135.918-1.439 1.532-.238.484-.346.954-1.098 4.69-.752 3.758-.831 4.213-.802 4.77.036.925.34 1.402 1.098 1.749l.362.166 7.898.022 7.892.014.18-.173c.232-.232.232-.506 0-.73l-.173-.181H11.2v-2.558c0-2.472-.007-2.558-.152-2.746-.195-.246-.513-.253-.751-.007l-.18.173v5.138l-1.533-.007c-1.048 0-1.619-.036-1.792-.094-.34-.123-.52-.448-.513-.932 0-.333 1.489-7.906 1.655-8.477.173-.557.592-1.084 1.077-1.344.354-.195 2.68-1.04 2.724-.99l.686 1.264c.658 1.214.81 1.402 1.135 1.402.173 0 .463-.34.463-.542 0-.1-.275-.694-.615-1.308-.34-.621-.614-1.156-.614-1.178 0-.029.173-.108.376-.173.303-.094.397-.101.462-.029.044.043 1.034 1.85 2.197 4.01 1.243 2.306 2.19 3.983 2.291 4.062.267.21.57.188.81-.05.1-.116 1.148-1.966 2.312-4.127 1.163-2.153 2.146-3.931 2.175-3.953.043-.029.708.16.788.224.05.044-4.372 8.166-4.582 8.405a1.511 1.511 0 01-2.218.036c-.109-.116-.644-1.048-1.2-2.074-.557-1.026-1.07-1.93-1.135-2.01-.281-.303-.903-.057-.903.37 0 .281 2.154 4.162 2.508 4.523.621.614 1.604.89 2.471.68.484-.116 1.142-.557 1.424-.954.123-.174 1.228-2.161 2.45-4.43a474.047 474.047 0 012.247-4.148c.043-.05 2.37.795 2.724.99.362.195.738.592.947 1.004.13.268.513 2.053 1.272 5.984.585 3.013.607 3.339.253 3.62-.282.224-.448.246-2.103.246h-1.474v-5.138l-.18-.173c-.24-.246-.557-.239-.752.007-.145.188-.152.274-.152 2.746v2.558h-.578c-.528 0-.6.022-.76.18-.23.225-.23.5 0 .73l.182.181 2.84-.021c2.782-.022 2.84-.022 3.194-.188.759-.347 1.062-.824 1.098-1.75.03-.556-.05-1.004-.802-4.733-.455-2.269-.896-4.3-.976-4.516-.187-.492-.693-1.15-1.148-1.482-.449-.325-.803-.47-3.34-1.344-2.023-.694-2.167-.759-2.796-1.2l-.672-.462V20.256l.42-.275c.917-.614 1.791-1.618 2.326-2.695.268-.528.585-1.525.687-2.132.036-.246.058-.267.289-.267.375 0 .997-.26 1.351-.571.55-.492.817-1.272.629-1.85-.065-.202-.109-1.135-.137-3.18-.058-3.266-.073-3.382-.615-4.488-.332-.672-.881-1.308-1.423-1.654-.13-.087-.485-.398-.788-.694C22.988.7 20.17-.231 17.488.05zm4.958 7.964c.347.492 1.019.969 1.597 1.135l.39.115-.022.969-.021.975-.268.152-.274.16-.195-.189c-.383-.354-.492-.376-1.858-.404-.708-.015-1.46-.008-1.669.021-.44.05-.976.369-1.106.65-.08.167-.115.181-.607.181-.52 0-.527-.007-.686-.253a1.534 1.534 0 00-.47-.412c-.289-.151-.42-.166-1.713-.188-1.575-.028-1.922.022-2.341.362l-.282.217-.253-.13c-.137-.08-.274-.181-.289-.232-.08-.195.137-.686.441-.982.448-.449.752-.514 1.864-.405 2.494.253 5.016-.39 6.815-1.735.318-.23.593-.426.614-.426.022 0 .174.188.333.42zm-11.173 4.857v.953l-.289-.043c-.614-.08-1.04-.65-.867-1.163.123-.376.557-.694.961-.694h.196v.947zm15.01-.767c.224.152.455.528.455.76 0 .23-.23.606-.455.758a1.326 1.326 0 01-.44.159l-.26.043v-1.922l.26.043c.144.022.339.094.44.16zm-9.488.008c.158.152.166 1.387.014 1.684-.202.39-.376.44-1.453.44-1.409 0-1.553-.123-1.553-1.366 0-.614.021-.737.13-.794.072-.044.68-.08 1.438-.08 1.098 0 1.33.022 1.424.116zm6.048-.044c.123.073.137.16.137.875v.802l-.245.246-.246.245h-.983c-.722 0-1.048-.029-1.192-.108-.318-.16-.44-.506-.44-1.236 0-.925-.051-.896 1.531-.896.759 0 1.351.029 1.438.072zM12.72 13.254c.007.925.361 1.532 1.12 1.893.332.159.448.173 1.518.173 1.004 0 1.2-.021 1.48-.152.724-.325 1.157-1.026 1.157-1.871v-.434h.773l.037.528c.057.874.455 1.474 1.192 1.8.282.122.462.136 1.525.115 1.344-.022 1.524-.072 1.987-.542.398-.398.513-.694.542-1.431.022-.491.05-.672.145-.744.065-.044.137-.087.173-.087.029 0 .058.542.058 1.207 0 .96-.03 1.337-.145 1.806a6.119 6.119 0 01-2.818 3.823c-1.424.838-3.339 1.055-4.878.557-1.937-.629-3.41-2.118-3.975-4.033-.173-.578-.202-.802-.23-2.052l-.044-1.395.195.123c.18.116.188.159.188.716zm8.238 7.855c0 .274-.065.361-1.2 1.626-.657.73-1.228 1.33-1.257 1.33-.029 0-.6-.6-1.257-1.33-1.077-1.2-1.2-1.359-1.2-1.59 0-.145.007-.26.022-.26.007 0 .26.065.556.151 1.106.297 2.978.246 3.939-.108.404-.144.397-.152.397.18zm-4.415 2.464c.6.665 1.09 1.236 1.09 1.272 0 .058-1.01.838-1.343 1.04-.058.044-.34-.404-.89-1.423-.44-.817-.801-1.51-.801-1.54.007-.064.744-.592.81-.57.02.007.534.556 1.134 1.221zm5.463-.976c.217.152.39.297.397.333 0 .029-.361.715-.802 1.532-.556 1.019-.83 1.467-.889 1.424-.52-.311-1.344-.99-1.315-1.077.036-.094 2.146-2.479 2.197-2.479.014 0 .202.123.412.267zm-3.201 3.245c.303.217.31.231.187.499-.072.159-.122.18-.491.18s-.42-.021-.491-.18a.904.904 0 01-.087-.246c0-.05.506-.44.57-.44.023 0 .16.086.311.187zm-1.684 1.091c.05.13.058.282.021.42l-.065.216-.159-.31c-.122-.246-.144-.34-.072-.42.123-.144.18-.122.275.094zm3.035-.094c.065.08.058.16-.043.362-.065.144-.145.26-.174.26-.101 0-.137-.354-.05-.535.093-.217.151-.231.267-.087zm-1.127 1.431l.188.586-.34.643c-.188.347-.354.636-.376.636-.022 0-.188-.29-.376-.636l-.34-.643.189-.586.195-.592h.664l.196.592z" /></g><defs><clipPath id="clip0_2830_373"><path fill="#fff" d="M0 0h37v37H0z" /></clipPath></defs></svg>
                </div>
                <h3>Exclusive Advisor</h3>
                <p>Lorem ipsum dolor amet consectetur  </p>
                <span className="fnumber">01</span>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeIn">
              <div className="feature-item">
                <div className="fea-icon">
                  <svg fill="none" viewBox="0 0 38 31"><path fill="#0D5FF9" d="M2.828.102C1.495.417.368 1.55.088 2.857c-.117.538-.117 24.742 0 25.28.288 1.342 1.473 2.497 2.85 2.777.553.115 31.291.115 31.843 0 1.377-.28 2.563-1.435 2.85-2.776.118-.539.118-24.743 0-25.281C37.344 1.515 36.158.36 34.781.08c-.265-.057-2.356-.079-6.613-.079h-6.23l-.25.244c-.324.316-.332.596-.037.919l.213.236 6.363.036c6.267.036 6.363.036 6.694.187.486.222.84.56 1.075 1.018l.207.41.022 8.945.014 8.953H1.48l.015-8.953.022-8.946.206-.409a2.19 2.19 0 011.075-1.018c.332-.151.428-.151 6.672-.187 3.484-.021 6.393-.064 6.466-.1.155-.072.346-.41.346-.617 0-.237-.191-.538-.405-.632-.28-.129-12.512-.107-13.05.015zM36.225 25.16l-.022 2.784-.207.409a2.19 2.19 0 01-1.075 1.018l-.338.151H3.137l-.42-.2a2.185 2.185 0 01-1.045-1.048c-.148-.316-.155-.46-.177-3.114l-.022-2.776h34.774l-.022 2.776z" /><path fill="#0D5FF9" d="M6.657 23.948c-1.524.531-1.98 2.296-.898 3.487.125.143.412.344.64.452.546.258 1.34.28 1.864.043.994-.438 1.517-1.543 1.215-2.547-.346-1.162-1.664-1.837-2.82-1.435zm1.2 1.55c.185.172.251.308.251.473 0 .294-.412.718-.692.718-.773 0-1.068-.976-.405-1.335.31-.165.574-.122.847.144zM13.123 25.354c-.493.265-.478 1.026.03 1.248.147.065 2.438.086 9.507.086 7.917 0 9.345-.014 9.522-.1.486-.251.486-.983 0-1.234-.294-.144-18.786-.15-19.059 0zM18.374.245c-.339.33-.339.617 0 .947.265.259.493.302.817.158.509-.222.523-.997.03-1.248-.332-.165-.575-.122-.847.143zM16.518 7.096c-.515.173-.869.467-1.149.94l-.228.395-.022 2.597c-.015 1.614.007 2.704.051 2.87.2.717.84 1.298 1.606 1.463.663.143 1.023.029 2.474-.782.7-.395 1.665-.94 2.15-1.205 1.356-.76 1.731-1.234 1.731-2.181 0-.961-.375-1.42-1.804-2.217-.53-.294-1.473-.825-2.099-1.184-1.554-.875-1.915-.968-2.71-.696zm2.813 2.418c1.097.61 2.07 1.184 2.165 1.27.11.1.162.23.162.409 0 .18-.051.308-.162.409-.272.244-4.146 2.389-4.315 2.389-.081 0-.25-.086-.376-.187l-.228-.186v-4.85l.228-.187c.125-.1.295-.186.376-.186.088 0 1.053.502 2.15 1.12z" /></svg>
                </div>
                <h3>Video Tutorial</h3>
                <p>Lorem ipsum dolor amet consectetur  </p>
                <span className="fnumber">02</span>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeIn">
              <div className="feature-item">
                <div className="fea-icon">
                  <svg fill="none" viewBox="0 0 37 37"><g fill="#fff" clipPath="url(#clip0_2830_393)"><path d="M26.774 3.606c-.925.34-.997.397-4.784 3.816-2.601 2.341-2.92 2.659-3.1 3.035l-.21.419-.021 3.483-.022 3.49H14.973l.246-.686c.672-1.879.716-3.852.123-5.066a3.117 3.117 0 00-1.43-1.445c-.6-.296-1.042-.354-1.244-.16-.072.08-.282.781-.535 1.786-.23.94-.505 1.872-.635 2.139-.297.643-.832 1.156-2.046 1.973-1.076.73-1.394 1.04-2.066 2.023-.514.745-.839 1.063-1.222 1.164-.498.137-.578.115-.621-.217a1.369 1.369 0 00-.716-.997c-.296-.145-.433-.152-2.03-.152-2.11 0-2.342.065-2.66.759-.13.274-.137.643-.137 6.916 0 4.509.022 6.691.08 6.829.093.245.397.578.657.715.282.145 3.809.145 4.09 0 .463-.246.737-.752.737-1.373v-.398l.492.188c1.033.398 2.457.824 3.259.983.81.152.983.16 5.5.16 3.324 0 4.726-.022 4.885-.08.173-.065.31-.065.614.014.325.087 1.59.101 7.689.087l7.299-.022.383-.173c.231-.101.513-.318.73-.55.636-.7.592.21.57-11.309-.021-11.223.015-10.341-.47-10.92-.216-.26-5.57-5.087-6.272-5.665a6.545 6.545 0 00-.975-.607c-.506-.246-.593-.26-1.337-.275-.622-.014-.875.008-1.157.116zm2.024 1.221c.542.26.694.383 4.047 3.404 1.51 1.359 2.804 2.573 2.876 2.703.116.217.123.838.123 10.168 0 9.553-.008 9.95-.138 10.189a1.236 1.236 0 01-.375.398c-.239.144-.39.144-7.234.166-4.098.007-6.995-.008-6.995-.05 0-.037.05-.189.115-.34.18-.413.166-1.207-.029-1.641-.144-.332-.144-.34-.014-.34.26 0 .874-.274 1.192-.542.21-.166.405-.426.557-.744.21-.412.238-.556.238-1.026s-.036-.614-.231-1.005l-.224-.462.34-.333c.903-.888.975-2.269.159-3.2a2.663 2.663 0 00-.542-.456c-.145-.08-.253-.16-.239-.18.282-.478.376-.803.376-1.338 0-.491-.03-.643-.203-.99-.245-.506-.795-1.011-1.264-1.178-.188-.065-.607-.137-.932-.159l-.6-.043V14.54c0-3.18.007-3.303.152-3.585.1-.21.939-1.004 2.926-2.789 3.332-2.992 3.418-3.064 3.968-3.331a2.278 2.278 0 011.95-.008zM13.897 12.04c.556.55.737 1.215.679 2.486-.058 1.287-.484 2.732-1.019 3.426a1.65 1.65 0 00-.217.383c-.065.21.13.585.34.636.087.021 1.734.043 3.664.058l3.505.014.267.166c.29.18.564.658.564.99 0 .333-.275.81-.564.99-.26.167-.303.167-2.833.188-2.5.022-2.565.03-2.724.174-.166.151-.21.433-.123.672.123.31.303.325 3.41.325 2.956 0 2.956 0 3.202.166.42.282.586.607.557 1.048-.036.405-.181.658-.52.91-.189.145-.311.152-3.31.188l-3.108.036-.137.174a.56.56 0 00.043.766l.174.18h2.695c2.652 0 2.703.008 2.985.167a1.2 1.2 0 01.592 1.127c-.036.354-.21.622-.556.853-.239.166-.26.166-2.905.166-2.797 0-3 .022-3.122.325a.647.647 0 00.116.665c.151.166.173.166 1.893.166 1.54 0 1.778.022 2.038.138.975.44.932 1.756-.072 2.139-.282.108-.76.115-4.82.086-4.503-.029-4.51-.029-5.341-.21a16.458 16.458 0 01-1.698-.49c-.477-.167-1.12-.39-1.424-.5l-.564-.187V20.84l.5-.072c.946-.152 1.408-.477 2.145-1.525.709-1.011.969-1.264 1.908-1.907 1.106-.752 1.597-1.171 1.987-1.691.449-.6.709-1.272 1.063-2.703.325-1.344.31-1.323.73-.904zM4.394 25.886l.014 6.489H1.156v-6.453c0-3.556.022-6.483.05-6.512.03-.021.752-.036 1.605-.028l1.561.021.022 6.483z" /><path d="M27.07 7.227c-.462.18-.931.643-1.134 1.112-.224.535-.173 1.345.123 1.829a2.057 2.057 0 003.664-.26c.405-.925-.05-2.147-.99-2.624-.427-.224-1.2-.245-1.662-.057zm1.236 1.156c.326.195.42.405.39.918-.014.253-.411.657-.7.715-.513.094-1.04-.332-1.04-.845 0-.76.722-1.178 1.35-.788zM27.396 15.87c-.116.151-.152.296-.152.643v.455l-.332.08c-.868.216-1.677.867-2.024 1.618-.18.383-.21.542-.21 1.063 0 .513.03.679.188 1.018.434.925 1.294 1.439 2.942 1.764 1.633.325 2.327.86 2.327 1.8 0 .78-.644 1.322-1.764 1.48-1.33.189-2.5-.375-2.825-1.372-.137-.405-.333-.571-.658-.571-.332 0-.564.303-.513.672.058.44.405 1.033.846 1.452.455.434.932.701 1.582.882l.441.123v.462c0 .398.029.492.18.636.246.253.622.246.825-.007.115-.152.151-.296.151-.636v-.448l.52-.123c1.005-.231 1.728-.723 2.118-1.43.202-.362.217-.449.217-1.114 0-.592-.03-.787-.16-1.062-.245-.535-.758-1.033-1.394-1.351-.52-.26-.845-.354-2.096-.622-.693-.144-1.264-.433-1.546-.78-.202-.253-.224-.333-.224-.773 0-.68.231-1.02.94-1.373.447-.225.563-.253 1.083-.253.925.007 1.496.332 2.024 1.149.137.216.325.433.404.484.311.159.788-.13.788-.477 0-.29-.34-.889-.737-1.315a3.457 3.457 0 00-1.568-.896l-.369-.095v-.476c0-.412-.021-.506-.166-.636-.246-.232-.643-.217-.838.029z" /></g><defs><clipPath id="clip0_2830_393"><path fill="#fff" d="M0 0h37v37H8a8 8 0 01-8-8V0z" /></clipPath></defs></svg>
                </div>
                <h3>Affordable Price</h3>
                <p>Lorem ipsum dolor amet consectetur  </p>
                <span className="fnumber">03</span>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeIn">
              <div className="feature-item">
                <div className="fea-icon">
                  <svg fill="none" viewBox="0 0 37 37"><g fill="#0D5FF9" clipPath="url(#clip0_2834_472)"><path d="M18.898.08c-5.5.556-10.306 3.786-12.95 8.7l-.347.65h-.47c-.889 0-.99.073-2.941 2.01C-.007 13.622.036 13.55.036 15.176c.007 1.2.101 1.879.448 3.071.282.99.81 2.27.976 2.356.238.123.57.05.737-.174l.152-.202-.174-.448c-.751-1.973-.997-2.948-1.07-4.25-.072-1.444-.13-1.343 1.735-3.222.875-.882 1.706-1.662 1.843-1.727.325-.152.874-.094 1.178.123.123.086.954 1.134 1.85 2.327 1.243 1.654 1.633 2.225 1.633 2.384 0 .167-.202.412-1.156 1.373-.643.643-1.2 1.243-1.25 1.337-.044.094-.08.333-.087.528 0 .31.05.448.34.918 1.886 3.05 4.935 6.366 8.035 8.7.701.535 2.284 1.612 2.616 1.785.21.116.817.116 1.034.008.094-.051.694-.607 1.337-1.25.96-.954 1.207-1.157 1.373-1.157.159 0 .73.39 2.392 1.64 1.308.976 2.247 1.735 2.327 1.872.202.325.253.665.151 1.012-.072.253-.368.585-1.727 1.937-1.922 1.915-1.806 1.857-3.259 1.777-1.43-.08-2.861-.462-4.553-1.228-2.695-1.221-6.229-3.729-8.606-6.121-1.554-1.561-3.578-4.17-4.792-6.186-.151-.246-.318-.47-.383-.491-.36-.138-.751.115-.751.491 0 .535 2.32 3.808 4.198 5.933 2.27 2.566 5.854 5.326 9.034 6.96 3.071 1.575 6.41 2.182 7.905 1.444.167-.086 1.005-.86 2.002-1.85 1.937-1.922 2.03-2.059 2.038-2.94l.007-.506.65-.347c4.705-2.537 7.777-6.902 8.615-12.228.152-.99.173-3.52.036-4.48-.31-2.183-1.033-4.3-2.06-6.063-.874-1.503-1.95-2.862-2.269-2.862-.086 0-.245.08-.354.166-.325.282-.274.513.297 1.214 1.575 1.93 2.717 4.409 3.172 6.887.81 4.365-.347 8.932-3.136 12.437-1.258 1.576-3.187 3.158-4.857 3.982l-.556.274-.31-.288c-.174-.152-.42-.362-.557-.463l-.239-.18.745-.377c1.452-.722 2.645-1.597 3.83-2.81 1.965-2.024 3.114-4.214 3.729-7.09.187-.867.195-1.04.195-2.695 0-1.655-.008-1.829-.195-2.71-.5-2.342-1.446-4.372-2.855-6.114-.6-.737-1.951-2.03-2.681-2.551a14.73 14.73 0 00-5.825-2.471c-.867-.16-3.15-.217-4.068-.102a14.152 14.152 0 00-7.19 3.028c-.304.253-.593.513-.63.586a.513.513 0 00.095.636c.281.26.484.202 1.149-.326 1.95-1.553 4.025-2.464 6.417-2.81 1.149-.167 3.187-.11 4.292.108 1.72.347 3.671 1.185 5.023 2.153 2.941 2.118 4.921 5.427 5.355 8.983.094.787.094 2.392 0 3.18-.253 2.045-1.091 4.22-2.298 5.925-.622.882-2.168 2.428-3.05 3.05-.708.498-1.872 1.142-2.645 1.452l-.44.174-1.28-.954c-.7-.528-1.38-1.005-1.503-1.055-.303-.123-.896-.116-1.228.029-.167.072-.68.535-1.366 1.236-.607.621-1.15 1.127-1.222 1.127-.064 0-.49-.246-.946-.557-3.462-2.312-6.57-5.405-8.86-8.838a21.21 21.21 0 01-.585-.91c-.073-.145.021-.26 1.076-1.294.723-.7 1.207-1.236 1.272-1.395.145-.332.152-.924.03-1.228-.051-.123-.528-.802-1.056-1.51l-.96-1.28.144-.368c.274-.694 1.004-2.03 1.467-2.674.542-.751.6-1.012.281-1.257-.26-.203-.477-.188-.715.043-.325.332-1.163 1.633-1.568 2.45l-.383.766-.18-.239c-.102-.137-.312-.383-.463-.556l-.29-.31.275-.557c.593-1.2 1.619-2.602 2.717-3.707a15.411 15.411 0 0116.31-3.563c1.367.506 3.065 1.467 4.142 2.334.253.202.542.39.636.42.375.093.722-.275.621-.666-.08-.332-1.792-1.553-3.209-2.298-1.51-.795-3.382-1.402-5.13-1.676-.904-.138-3.173-.195-4.084-.101z" /><path d="M13.55 12.885c-.65.217-1.048.55-1.33 1.12-.231.455-.224.795.022 1.005.108.086.253.166.325.166.217 0 .484-.26.578-.571.087-.296.39-.593.716-.694.448-.137 1.105.253 1.235.737.145.513-.137 1.027-1.871 3.382-.513.701-.954 1.33-.976 1.402-.072.232.094.513.369.629.21.087.57.101 1.922.087 1.648-.022 1.662-.022 1.8-.195a.54.54 0 00-.008-.716c-.144-.152-.21-.159-1.337-.159H13.81l.947-1.322c.99-1.373 1.315-1.951 1.423-2.53.167-.889-.361-1.864-1.2-2.233-.411-.18-1.054-.23-1.43-.108z" /><path d="M19.252 13c-.282.174-.477.427-1.012 1.345-1.026 1.763-1.836 3.266-1.836 3.418 0 .094.08.246.181.34.173.18.188.18 1.517.18h1.337v.65c0 .687.102 1.027.326 1.114.23.086.448.043.6-.123.13-.138.158-.26.173-.882l.022-.715.238-.05c.34-.066.52-.261.52-.543a.526.526 0 00-.52-.535h-.202v-1.684c0-.917-.036-1.799-.073-1.943-.1-.354-.513-.709-.816-.709-.13 0-.333.065-.455.138zm.26 2.826V17.2h-.795c-.434 0-.795-.021-.795-.05 0-.101 1.496-2.696 1.554-2.696.021 0 .036.615.036 1.373zM24.736 12.972c-.108.072-.541 1.09-1.423 3.31-.701 1.763-1.272 3.273-1.272 3.367 0 .21.31.513.528.513a.558.558 0 00.325-.13c.159-.13 2.688-6.417 2.688-6.67 0-.195-.318-.499-.52-.499a.696.696 0 00-.326.109zM26.775 13.044c-.217.21-.232.463-.044.694.137.166.174.173 1.547.21l1.402.035-1.178 2.674c-.716 1.619-1.178 2.768-1.185 2.905 0 .427.484.687.816.434.145-.101 2.941-6.41 2.941-6.634 0-.08-.08-.224-.18-.318l-.174-.18h-3.772l-.173.18z" /></g><defs><clipPath id="clip0_2834_472"><path fill="#fff" d="M0 0h37v37H0z" /></clipPath></defs></svg>
                </div>
                <h3>Life Time Support</h3>
                <p>Lorem ipsum dolor amet consectetur  </p>
                <span className="fnumber">04</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}