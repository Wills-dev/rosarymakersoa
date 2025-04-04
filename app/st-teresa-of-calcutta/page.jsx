import Image from "next/image";

import MainLayout from "../../components/MainLayout";

const page = () => {
  return (
    <MainLayout>
      {" "}
      <section className="bg-cream py-6 w-full">
        <div className="padding-x w-full space-y-6">
          <div className="section-bg text-primary-brown space-y-4">
            <h3 className="sm:text-lg uppercase font-semibold text-primary-black border-b-1">
              St. Teresa of Calcutta
            </h3>
            <div className="flex flex-wrap max-sm:flex-col gap-6">
              <div className="sm:min-w-96 flex-1 w-full text-primary-brown space-y-4">
                <p>
                  <span className="italic">
                    “By blood, I am Albanian. By citizenship, an Indian. By
                    faith, I am a Catholic nun. As to my calling, I belong to
                    the world. As to my heart, I belong entirely to the Heart of
                    Jesus.”
                  </span>{" "}
                  Small of stature, rocklike in faith, Mother Teresa of Calcutta
                  was entrusted with the mission of proclaiming God’s thirsting
                  love for humanity, especially for the poorest of the poor.
                  <span className="italic">
                    “God still loves the world and He sends you and me to be His
                    love and His compassion to the poor.”
                  </span>
                </p>
                <p>
                  This luminous messenger of God’s love was born on 26 August
                  1910 in Skopje, a city situated at the crossroads of Balkan
                  history. The youngest of the children born to Nikola and Drane
                  Bojaxhiu, she was baptised Gonxha Agnes, received her First
                  Communion at the age of five and a half and was confirmed in
                  November 1916. From the day of her First Holy Communion, a
                  love for souls was within her. Her father’s sudden death when
                  Gonxha was about eight years old left in the family in
                  financial straits. Drane raised her children firmly and
                  lovingly, greatly influencing her daughter’s character and
                  vocation. Gonxha’s religious formation was further assisted by
                  the vibrant Jesuit parish of the Sacred Heart in which she was
                  much involved.
                </p>
              </div>
              <div className="max-w-sm w-full">
                <Image
                  src="/assets/images/teresa.jpg"
                  height={270}
                  width={120}
                  alt="dots"
                  className="w-full object-cover"
                />
              </div>
            </div>
            <p>
              At the age of eighteen, moved by a desire to become a missionary,
              Gonxha left her home in September 1928 to join the Institute of
              the Blessed Virgin Mary, known as the Sisters of Loreto, in
              Ireland. There she received the name Sister Mary Teresa after St.
              Thérèse of Lisieux. In December, she departed for India, arriving
              in Calcutta on 6 January 1929. After making her First Profession
              of Vows in May 1931, Sister Teresa was assigned to the Loreto
              Entally community in Calcutta and taught at St. Mary’s School for
              girls. On 24 May 1937, Sister Teresa made her Final Profession of
              Vows, becoming, as she said, the “spouse of Jesus” for “all
              eternity.” From that time on she was called Mother Teresa. She
              continued teaching at St. Mary’s and in 1944 became the school’s
              principal. A person of profound prayer and deep love for her
              religious sisters and her students, Mother Teresa’s twenty years
              in Loreto were filled with profound happiness. Noted for her
              charity, unselfishness and courage, her capacity for hard work and
              a natural talent for organization, she lived out her consecration
              to Jesus, in the midst of her companions, with fidelity and joy.
            </p>
            <p>
              On 10 September 1946 during the train ride from Calcutta to
              Darjeeling for her annual retreat, Mother Teresa received her
              <span className="italic">“inspiration,”</span> her{" "}
              <span className="italic">“call within a call.”</span> On that day,
              in a way she would never explain, Jesus’ thirst for love and for
              souls took hold of her heart and the desire to satiate His thirst
              became the driving force of her life. Over the course of the next
              weeks and months, by means of interior locutions and visions,
              Jesus revealed to her the desire of His heart for{" "}
              <span className="italic">“victims of love”</span> who would{" "}
              <span className="italic">
                “radiate His love on souls.”{" "}
                <span className="italic font-poppins font-extrabold">
                  “Come be My light,”
                </span>
              </span>{" "}
              He begged her.{" "}
              <span className="italic">“I cannot go alone.”</span> He revealed
              His pain at the neglect of the poor, His sorrow at their ignorance
              of Him and His longing for their love. He asked Mother Teresa to
              establish a religious community, Missionaries of Charity,
              dedicated to the service of the poorest of the poor. Nearly two
              years of testing and discernment passed before Mother Teresa
              received permission to begin. On August 17, 1948, she dressed for
              the first time in a white, blue-bordered sari and passed through
              the gates of her beloved Loreto convent to enter the world of the
              poor.
            </p>
            <p>
              After a short course with the Medical Mission Sisters in Patna,
              Mother Teresa returned to Calcutta and found temporary lodging
              with the Little Sisters of the Poor. On 21 December she went for
              the first time to the slums. She visited families, washed the
              sores of some children, cared for an old man lying sick on the
              road and nursed a woman dying of hunger and TB. She started each
              day in communion with Jesus in the Eucharist and then went out,
              rosary in her hand, to find and serve Him in{" "}
              <span className="italic">
                “the unwanted, the unloved, the uncared for.”
              </span>{" "}
              After some months, she was joined, one by one, by her former
              students.{" "}
            </p>
            <p>
              On 7 October 1950 the new congregation of the Missionaries of
              Charity was officially established in the Archdiocese of Calcutta.
              By the early 1960s, Mother Teresa began to send her Sisters to
              other parts of India. The Decree of Praise granted to the
              Congregation by Pope Paul VI in February 1965 encouraged her to
              open a house in Venezuela. It was soon followed by foundations in
              Rome and Tanzania and, eventually, on every continent. Starting in
              1980 and continuing through the 1990s, Mother Teresa opened houses
              in almost all of the communist countries, including the former
              Soviet Union, Albania and Cuba.
            </p>
            <p>
              In order to respond better to both the physical and spiritual
              needs of the poor, Mother Teresa founded the Missionaries of
              Charity Brothers in 1963, in 1976 the contemplative branch of the
              Sisters, in 1979 the Contemplative Brothers, and in 1984 the
              Missionaries of Charity Fathers. Yet her inspiration was not
              limited to those with religious vocations. She formed the
              Co-Workers of Mother Teresa and the Sick and Suffering Co-Workers,
              people of many faiths and nationalities with whom she shared her
              spirit of prayer, simplicity, sacrifice and her apostolate of
              humble works of love. This spirit later inspired the Lay
              Missionaries of Charity. In answer to the requests of many
              priests, in 1981 Mother Teresa also began the Corpus Christi
              Movement for Priests as a “little way of holiness” for those who
              desire to share in her charism and spirit.{" "}
            </p>
            <p>
              During the years of rapid growth the world began to turn its eyes
              towards Mother Teresa and the work she had started. Numerous
              awards, beginning with the Indian Padmashri Award in 1962 and
              notably the Nobel Peace Prize in 1979, honoured her work, while an
              increasingly interested media began to follow her activities. She
              received both prizes and attention “for the glory of God and in
              the name of the poor.”
            </p>
            <p>
              The whole of Mother Teresa’s life and labour bore witness to the
              joy of loving, the greatness and dignity of every human person,
              the value of little things done faithfully and with love, and the
              surpassing worth of friendship with God. But there was another
              heroic side of this great woman that was revealed only after her
              death. Hidden from all eyes, hidden even from those closest to
              her, was her interior life marked by an experience of a deep,
              painful and abiding feeling of being separated from God, even
              rejected by Him, along with an ever-increasing longing for His
              love. She called her inner experience, “the darkness.” The
              “painful night” of her soul, which began around the time she
              started her work for the poor and continued to the end of her
              life, led Mother Teresa to an ever more profound union with God.
              Through the darkness she mystically participated in the thirst of
              Jesus, in His painful and burning longing for love, and she shared
              in the interior desolation of the poor.
            </p>
            <p>
              During the last years of her life, despite increasingly severe
              health problems, Mother Teresa continued to govern her Society and
              respond to the needs of the poor and the Church. By 1997, Mother
              Teresa’s Sisters numbered nearly 4,000 members and were
              established in 610 foundations in 123 countries of the world. In
              March 1997 she blessed her newly-elected successor as Superior
              General of the Missionaries of Charity and then made one more trip
              abroad. After meeting Pope John Paul II for the last time, she
              returned to Calcutta and spent her final weeks receiving visitors
              and instructing her Sisters. On 5 September Mother Teresa’s
              earthly life came to an end. She was given the honour of a state
              funeral by the Government of India and her body was buried in the
              Mother House of the Missionaries of Charity. Her tomb quickly
              became a place of pilgrimage and prayer for people of all faiths,
              rich and poor alike. Mother Teresa left a testament of unshakable
              faith, invincible hope and extraordinary charity. Her response to
              Jesus’ plea,{" "}
              <span className="italic font-poppins font-extrabold">
                “Come be My light,”
              </span>{" "}
              made her a Missionary of Charity, a “mother to the poor,” a symbol
              of compassion to the world, and a living witness to the thirsting
              love of God.
            </p>
            <p>
              Less than two years after her death, in view of Mother Teresa’s
              widespread reputation of holiness and the favours being reported,
              Pope John Paul II permitted the opening of her Cause of
              Canonization. On 20 December 2002 he approved the decrees of her
              heroic virtues and miracles.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default page;
