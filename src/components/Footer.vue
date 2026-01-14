<template>
  <v-footer class="app-footer">
    <v-container class="py-6">
      <v-row>
        <!-- Autor -->
        <v-col cols="12" md="4">
          <div class="footer-section">
            <div class="footer-title">
              <v-icon icon="mdi-account" class="mr-2" />
              <span>Autor</span>
            </div>
            <p class="footer-text">Martin Ovcarčík</p>
          </div>
        </v-col>

        <!-- Kontakt -->
        <v-col cols="12" md="4">
          <div class="footer-section">
            <div class="footer-title">
              <v-icon icon="mdi-email-outline" class="mr-2" />
              <span>Kontakt</span>
            </div>
            <p class="footer-text">
              <a href="mailto:martin.ovcarcik@student.ukf.sk" class="footer-link">
                martin.ovcarcik@student.ukf.sk
              </a>
            </p>
          </div>
        </v-col>

        <!-- Info -->
        <v-col cols="12" md="4">
          <div class="footer-section">
            <div class="footer-title">
              <v-icon icon="mdi-alert-circle-outline" class="mr-2" />
              <span>Dôležitá informácia</span>
            </div>
            <p class="footer-text">
              Všetky obrázky sú voľne dostupné alebo AI generated.
            </p>
            <p class="footer-text">
              Obsah stránky je vymyslený, nejde o skutočnú reklamu.
            </p>
          </div>
        </v-col>
      </v-row>

      <v-divider class="my-4" />

      <v-row justify="space-between" align="center">
        <v-col cols="12" md="6" class="text-center text-md-left">
          <small class="footer-copy">
            © 2026 MAdFOX Brewery. Všetky práva vyhradené.
          </small>
        </v-col>
        <v-col cols="12" md="6" class="text-center text-md-right">
          <small class="footer-copy">
            Tento projekt je študentský / demo stránka.
          </small>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style>
.app-footer {
  
  color: #000000;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-section {
  margin-bottom: 16px;
}

.footer-title {
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-bottom: 4px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.footer-text {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.85;
}

.footer-link {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px dotted rgba(255, 255, 255, 0.5);
}

.footer-link:hover {
  border-bottom-style: solid;
}

.footer-copy {
  opacity: 0.7;
  font-size: 0.8rem;
}
</style>