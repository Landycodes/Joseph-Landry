import React from "react";

export default function Books() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="mt-5 mb-3">The Gnostic’s Fire</h2>
      <img src="books/tgf.jpg" alt="the gnostics fire" />
      <h4 className="mt-3">Available on</h4>
      <a
        href="https://www.amazon.com/Gnostics-Fire-Joseph-Landry/dp/1984569422"
        className="d-flex justify-content-between align-items-end text-white text-decoration-none border p-2 rounded"
        style={{ width: "200px" }}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="books/amzn.png"
          alt="amazon"
          style={{ height: "40px", width: "auto", borderRadius: "5px" }}
        />
        <h4>Amazon</h4>
        <div></div>
        <div></div>
      </a>
      <h3 className="mt-5 mb-1">Summary</h3>
      <p className="summary text-center p-3">
        Ghoulish deaths of three Catholic priests, the insides of their bodies
        seemingly burned away, baffles the London Metropolitan Police Department
        in 1920. Inspector John Nelson is requested by Commissioner Edward
        Allenby to handle the case. Soul-weary after his military service in
        World War One, John is hesitant to accept, thinking he is well past the
        prime of his career, but the commissioner believes that he is the best
        man for the job, and insists that he take the assignment. John learns
        that Doctor Alex Milton, an enthusiastic occult scholar, has been chosen
        to help him on the case. After they view one of the grisly corpses in
        the morgue, Alex tells John about his research on the Gnostics and their
        power to weld mysterious fire, suggesting that this is the cause of the
        uncanny deaths.
      </p>
      <br></br>
      <p className="summary text-center p-3">
        He also describes a secret ancient cabal known as the Brotherhood of the
        Snake, which is believed to have once possessed the Amulet of Solomon, a
        mystical relic that is a source of this power and can be traced to
        Biblical times. Alex claims that shadowy demonic beings, called Archons,
        are connected with it. At first put off by Alex, John believes there is
        a perfectly rational explanation for the deaths. However, he soon comes
        upon haunting clues which lead him deeper into the world of the occult.
        After Sarah Wilford, a long-time friend of Alex, teams up with them,
        they come to discover that the Archons are trying to find the Amulet of
        Solomon and free their lord, Asmodeus, who is imprisoned inside of it.
      </p>
      <br></br>
      <p className="summary text-center mb-5 p-3">
        John comes to find that there is truth to what Alex has been saying,
        that evil forces are killing people with a supernatural energy. The
        investigation leads them across the English countryside to find the
        Archons before they can retrieve the Amulet. They come upon an old,
        secluded monastery in Wales where they encounter monks who are with the
        Brotherhood of the Snake and who can summon the same otherworldly powers
        to fight the rancorous demons. Only with their help, can Asmodeus and
        the Archons be defeated, and the Amulet reclaimed… before the world
        falls into terrible darkness.
      </p>
    </div>
  );
}
