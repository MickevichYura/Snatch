<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">

  <xsl:template match="/">
    <html>

      <head>
        <title>Facts</title>
        <link rel="stylesheet" href="style.css"/>
        <link rel="shortcut icon" type="image/x-icon" href="images/icon.ico"/>
      </head>


      <body>
        <div id="header">
          <ul class="menu">
            <li>
              <a href="index.html">Home</a>
              <ul class="submenu">
                <li>
                  <a href="index.html#Storyline">Storyline</a>
                </li>
                <li>
                  <a href="index.html#Cast">Cast</a>
                </li>
                <li>
                  <a href="index.html#Produced">Produced</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="director.html">Guy Ritchie</a>
            </li>
            <li>
              <a href="facts.xml">Facts</a>
            </li>
            <li>
              <a href="photo.html">Photo</a>
            </li>
            <li>
              <a href="video.html">Video</a>
            </li>
            <li>
              <a href="my review.html">My Review</a>
            </li>
            <li>
              <a href="reviews.html">Reviews</a>
            </li>
            <li>
              <a href="registration.html">Registration</a>
            </li>
          </ul>
        </div>


        <h2>Did You Know?</h2>
        <table border="1">
          <tr bgcolor="#FEFBA5">
            <th style="text-align:left">number</th>
            <th style="text-align:left">Likes</th>
            <th style="text-align:left">text</th>
          </tr>
          <xsl:for-each select="facts/fact">
            <xsl:sort select="numberOfLikes"/>
            <tr>
              <td>
                <xsl:value-of select="position()"/>
              </td>
              <td>
                <xsl:value-of select="number(numberOfLikes)"/>
              </td>
              <td>
                <xsl:value-of select="text"/>
              </td>
            </tr>
          </xsl:for-each>
        </table>

        <h3>Суммарное количество</h3>
        <xsl:value-of select="sum(//numberOfLikes)"/>

        <h3>Среднее количество</h3>
        <xsl:value-of select="sum(//numberOfLikes) div count(//numberOfLikes)"/>

      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>