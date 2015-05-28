<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">

  <xsl:template match="/">
    <html>

      <head>
        <title>Facts</title>
        <link rel="stylesheet" href="css/style.css"/>
        <link rel="shortcut icon" type="image/x-icon" href="images/icon.ico"/>
      </head>

      <body>


        <div class="content">
          <h2>Did You Know?</h2>

          <table border="1">
            <tr bgcolor="#FEFBA5">
              <th style="text-align:left">number</th>
              <th style="text-align:left">Likes</th>
              <th style="text-align:left">text</th>
            </tr>
            <xsl:for-each select="facts/fact[numberOfLikes &gt;0 and numberOfLikes &lt;10000]">
              <xsl:sort select="text"/>
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

          <h3>Sum</h3>
          <xsl:value-of select="sum(//numberOfLikes)"/>

          <h3>Average</h3>
          <xsl:value-of select="sum(//numberOfLikes) div count(//numberOfLikes)"/>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>