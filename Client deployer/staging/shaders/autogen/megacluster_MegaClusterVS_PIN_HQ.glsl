varying vec4 xlv_TEXCOORD3;
varying vec4 xlv_TEXCOORD2;
varying vec4 xlv_COLOR0;
varying vec4 xlv_TEXCOORD1;
varying vec4 xlv_TEXCOORD0;
attribute vec4 uv1;
attribute vec4 uv0;
attribute vec3 normal;
attribute vec4 vertex;
uniform mat4 WorldMatrix;
uniform vec3 FadeDistance;
uniform vec4 LightConfig1;
uniform vec4 LightConfig0;
uniform vec4 FogParams;
uniform vec3 Lamp1Color;
uniform vec3 Lamp0Color;
uniform vec3 Lamp0Dir;
uniform mat4 ViewProjection;
void main ()
{
  vec4 tmpvar_1;
  vec4 tmpvar_2;
  vec3 tmpvar_3;
  tmpvar_3 = ((normal - 127.0) / 127.0);
  vec4 tmpvar_4;
  tmpvar_4 = (uv0 / 1024.0);
  vec3 tmpvar_5;
  tmpvar_5 = (WorldMatrix * vertex).xyz;
  float tmpvar_6;
  tmpvar_6 = dot (tmpvar_3, -(Lamp0Dir));
  vec4 tmpvar_7;
  tmpvar_7.w = 1.0;
  tmpvar_7.xyz = tmpvar_5;
  vec4 tmpvar_8;
  tmpvar_8 = (ViewProjection * tmpvar_7);
  vec4 tmpvar_9;
  tmpvar_9.w = 0.0;
  tmpvar_9.xyz = ((clamp (tmpvar_6, 0.0, 1.0) * Lamp0Color) + (max (-(tmpvar_6), 0.0) * Lamp1Color));
  vec4 tmpvar_10;
  tmpvar_10.xyz = (((tmpvar_5 + (tmpvar_3 * 6.0)).yxz * LightConfig0.xyz) + LightConfig1.xyz);
  tmpvar_10.w = ((FogParams.z - tmpvar_8.w) * FogParams.w);
  vec4 tmpvar_11;
  tmpvar_11.xyz = tmpvar_5;
  tmpvar_11.w = (tmpvar_8.w * FadeDistance.y);
  tmpvar_1.xy = tmpvar_4.xy;
  tmpvar_2.xy = tmpvar_4.zw;
  vec4 tmpvar_12;
  tmpvar_12 = ((uv1 * FadeDistance.z) + (0.5 * tmpvar_11.w));
  tmpvar_1.zw = tmpvar_12.xy;
  tmpvar_2.zw = tmpvar_12.zw;
  gl_Position = tmpvar_8;
  xlv_TEXCOORD0 = tmpvar_1;
  xlv_TEXCOORD1 = tmpvar_2;
  xlv_COLOR0 = tmpvar_9;
  xlv_TEXCOORD2 = tmpvar_10;
  xlv_TEXCOORD3 = tmpvar_11;
}

